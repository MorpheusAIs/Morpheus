import ReactModal from "react-modal";
import { SignInWithWalletButton } from "./SignInWithWallet";



type Props = {
    open: boolean;
    setOpen: (e: boolean) => void;
    message: JSX.Element;
};

export const ModalChain = ({ open, setOpen, message }: Props) => {
    return (
        <div>
            <ReactModal
                isOpen={open}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        position: "absolute",
                        width: "408px",
                        height: "200px",
                        margin: "auto",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        border: "2px solid #FBBF24",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "12px",
                        backdropFilter: "blur(7.8px)",
                        outline: "none",
                        padding: "20px",
                    },
                }}
                ariaHideApp={false}
                preventScroll={true}
                parentSelector={() => document.body}>
                <div className="flex justify-center">
                    <div>
                        <div className="text-center text-lg text-white">{message}</div>
                        <button
                            onClick={() => setOpen(false)}
                            // className="text-white hover:bg-transparent border hover:text-amber-500 hover:border-amber-500 border-transparent primaryButton absolute bottom-0 mb-8"
                        >
                            Close
                        </button>
                        <SignInWithWalletButton />
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};