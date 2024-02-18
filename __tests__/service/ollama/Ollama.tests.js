const { Ollama } = require("../../../src/service/ollama/ollama")
const { exec } = require('child_process');
const os = require("os");


jest.mock('child_process');

describe('Ollama', () => {
    let ollamaInstance;

    beforeAll(() => {
        // Mocking fetch to prevent actual HTTP requests
        global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));
    });

    beforeEach(() => {
        ollamaInstance = new Ollama();
    });

    afterEach(() => {
        // Cleanup any running processes or resources
        ollamaInstance.stop();
    });

    describe(".ping()", () => {
        test('should successfully ping the server', async () => {
            global.fetch.mockResolvedValueOnce({ status: 200 });

            await expect(ollamaInstance.ping()).resolves.toBe(true);
            expect(fetch).toHaveBeenCalledWith(ollamaInstance.host, {
                method: 'GET',
                cache: 'no-store',
            });
        });

        test('should fail to ping the server', async () => {
            global.fetch.mockResolvedValueOnce({ status: 500 });

            await expect(ollamaInstance.ping()).rejects.toThrowError('Failed to ping Ollama server');
            expect(fetch).toHaveBeenCalledWith(ollamaInstance.host, {
                method: 'GET',
                cache: 'no-store',
            });
        });
    })


    describe(".abortRequest()", () => {
        test('should abort the ongoing request', () => {
            const abortSpy = jest.spyOn(global.AbortController.prototype, 'abort');
            ollamaInstance.abortRequest();
            expect(abortSpy).toHaveBeenCalled();
            abortSpy.mockRestore();
        });

        test('should create a new AbortController instance', () => {
            const abortControllerMock = jest.fn();
            global.AbortController = abortControllerMock;
            ollamaInstance.abortRequest();
            expect(abortControllerMock).toHaveBeenCalled();
        });
    })

    describe(".waitForPing()", () => {
        test('should successfully ping the server within retries', async () => {
            const pingMock = jest.fn()
                .mockRejectedValueOnce(new Error('Server not responding'))
                .mockResolvedValueOnce(true);
            ollamaInstance.ping = pingMock;

            await expect(ollamaInstance.waitForPing()).resolves.toBe(undefined);

            // One initial try + one retry
            expect(pingMock).toHaveBeenCalledTimes(2);
            expect(pingMock).toHaveBeenNthCalledWith(1);
            expect(pingMock).toHaveBeenNthCalledWith(2);
        });

        test('should fail to ping the server after retries', async () => {
            // Mocking the ping method to always throw an error
            const pingMock = jest.fn().mockRejectedValue(new Error('Server not responding'));
            ollamaInstance.ping = pingMock;

            // Calling the waitForPing method
            await expect(ollamaInstance.waitForPing(100, 3)).rejects.toThrowError();

            // Expecting that the ping method is called the correct number of times
            expect(pingMock).toHaveBeenCalledTimes(3); // One initial try + two retries

            // Expecting that the ping method is called with the specified delay
            expect(pingMock).toHaveBeenNthCalledWith(1);
            expect(pingMock).toHaveBeenNthCalledWith(2);
            expect(pingMock).toHaveBeenNthCalledWith(3);
        });
    })

    describe(".parse()", () => {

        test('should parse valid value correctly', () => {
            const value = new TextEncoder().encode('line 1\nline 2\nline 3');

            const parsed = ollamaInstance.parse(value);

            // Expecting that the parsed result is an array with correct lines
            expect(parsed).toEqual(['line 1', 'line 2', 'line 3']);
        });

        test('should throw error for invalid value', () => {
            // Providing an invalid value (not an instance of ArrayBuffer or ArrayBufferView)
            const invalidValue = 'not an ArrayBuffer or ArrayBufferView';

            // Expecting that calling parse with invalid value throws a TypeError
            expect(() => ollamaInstance.parse(invalidValue)).toThrowError(TypeError);
            expect(() => ollamaInstance.parse(invalidValue)).toThrowError('The "value" argument must be an instance of ArrayBuffer or ArrayBufferView.');
        });
    })

    describe(".clearHistory()", () => {
        test('should clear the context', () => {
            // Set a non-null value to context
            ollamaInstance.context = { data: 'some data' };

            // Call clearHistory method
            ollamaInstance.clearHistory();

            // Expecting that the context property is null after calling clearHistory
            expect(ollamaInstance.context).toBeNull();
        });
    })

    describe(".stop()", () => {

        test('should do nothing if childProcess is null', () => {
            // Call stop method when childProcess is null
            ollamaInstance.stop();

            // Expecting that exec function is not called
            expect(exec).not.toHaveBeenCalled();
        });


        test('should stop child process on Windows', () => {
            // Mocking os.platform to return 'win32'
            jest.spyOn(os, 'platform').mockReturnValue('win32');

            // Mocking childProcess
            ollamaInstance.childProcess = { pid: 1234 };

            // Call stop method
            ollamaInstance.stop();

            // Expecting that exec function is called with correct command
            expect(exec).toHaveBeenCalledWith(`taskkill /pid 1234 /f /t`, expect.any(Function));
        });

        test('should kill child process on non-Windows platforms', () => {
            // Mocking os.platform to return 'linux' (non-Windows platform)
            jest.spyOn(os, 'platform').mockReturnValue('linux');

            // Mocking childProcess
            const killMock = jest.fn();
            ollamaInstance.childProcess = { kill: killMock };

            // Call stop method
            ollamaInstance.stop();

            // Expecting that kill method of childProcess is called
            expect(killMock).toHaveBeenCalled();
        });
    })

    describe(".run()", () => {
        test('should call pull and generate methods and set context to null', async () => {
            // Mock the pull and generate methods
            ollamaInstance.pull = jest.fn(() => Promise.resolve());
            ollamaInstance.generate = jest.fn(() => Promise.resolve());

            const model = 'testModel';
            const mockCallback = jest.fn();

            // Call the run method
            await ollamaInstance.run(model, mockCallback);

            // Expect that pull and generate methods are called with the correct arguments
            expect(ollamaInstance.pull).toHaveBeenCalledWith(model, mockCallback);
            expect(ollamaInstance.generate).toHaveBeenCalledWith(model, '', mockCallback);

            // Expect that the context is set to null
            expect(ollamaInstance.context).toBeNull();
        });
    })

    describe(".pull()", () => {


    })



    // Add more test cases for other methods as needed
});
