# Morstats.info User Guide
This guide serves to walk users through the process of using the MorStats.info dashboard and analytics. It also includes several key sections of code for others wanting to build similar dashboards and analytics.

## Background
MorStats.info serves as a home page for capital providers. It offers real-time data and analytics for capital providers. It is often referenced by the discord community as a reference for new users or those looking for more information on the capital providing during the bootstraph period.

## Home Page
The landing page provides the following six key pieces of data:
1) Boostrap End - The countdown shows how many days, hours, minutes, and seconds remain in the 90 day bootstrapping period that began on February 8, 2024 at 12:00 PM UTC and is scheduled to end on May 8, 2024 at 12:00 PM UTC.
2) Morpheus Staked Ethereum - API pull from Etherscan that returns the stETH contained within the multi-sig wallet representing the total contributions.
3) Days Since Kickoff - The number of days elapsed since the bootstrap period kicked off on February 8, 2024 at 12:00 PM UTC.
4) Today's Daily Emissions - The number of MOR tokens emitted for the current day. This is calculated by day 1 emissions of 14,400 with an emission reduction of 2.468994701 each subsequent day.
5) Total Circulating Supply - The total number of MOR tokens that are technically circulating (although not yet distributed). This is represented by 14,400 on Day 1 with an emission reduction of 2.468994701 each subsequent day.
6) Today's Capital Emissions - The number of MOR tokens emitted for the current day that are distributed to the Capital Providers. This is calculated by day 1 emissions of 14,400 with an emission reduction of 2.468994701 each subsequent day, with 24% of that supply going to Capital Providers.

## Staked ETH Page
The primary calculation page for Capital Providers to understand their expected MOR emissions:
1) Morpheus Staked Ethereum - API pull from Etherscan that returns the stETH contained within the multi-sig wallet representing the total contributions.
2) Staked Ethereum Withdrawn - API pull from Etherscan that analyzes transactions to identify stETH withdrawn that was previously deposited. Note: This amount has already been excluded from the 'Morpheus Staked Ethereum' so there is no need to manually calculate.
3) Total stETH Contribution Yield - Provides the total earnings from the deposited stETH to Morpheus. The yield on the deposited stETH goes to the protocol which will help to launch the initial liquidity. Yield is provided in both ETH and USD values.
4) MOR Earned per stETH - Based on the current number of stETH contributed in total, this section gives the calculated MOR earned for each stETH contributed to provide a baseline for expected earnings.
5) MOR Calculation - Input box for the user to write in their number of stETH contributed. The calculator then shows the daily, weekly, monthly, and yearly MOR emissions. It also has a calculation to show the expected MOR to be earned between the current date and the end of the Bootstrap period.
6) At the bottom of this page, the etherscan wallet address and contract can be found to allow for users to verify all data.

## Emissions Page
Detailed schedule showing the daily emissions broken down by
1) Day
2) Date
3) Circulating Supply
4) Total Emissions (Daily)
5) Community Allocation
6) Capital Allocation
7) Code Allocation
8) Compute Allocation 
9) Protection Allocation

## MOR Price Projection Page
Detailed Schedule the projected MOR price based on various overall market capitalization amounts. 
1) Estimated Market Cap
2) MOR price projection based off of the circulating supply at Day 90
3) MOR price projection based off of the circulating supply at end of Year 1
4) MOR price projection based off of the max supply of 42,000,000. Also known as the fully diluted value (FDV)

# Code Snippets
Below are several code snippets that are useful for anyone else looking to build a website, dashboard, or analytics incorporating similar features.

## stETH balance from Etherscan
    $api_key = '[insert API key]';
    $token_address = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84';
    $address = '0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790';
    
    // API endpoint for getting token balance
    $api_url = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress={$token_address}&address={$address}&tag=latest&apikey={$api_key}";
    
    // Make API request
    $response = wp_remote_get($api_url);
    
    // Check for errors
    if (is_wp_error($response)) {
        echo 'Error fetching data from Etherscan: ' . $response->get_error_message();
    } else {
        // Parse the JSON response
        $data = json_decode(wp_remote_retrieve_body($response), true);

    // Check if the request was successful
    if ($data['status'] == 1) {
        $token_balance = number_format($data['result']/1000000000000000000);
        echo "{$token_balance} stETH";
    } else {
        echo 'Etherscan API request failed: ' . $data['message'];
    }
    }

## MOR per ETH Calculations
    $api_key = '[insert API key]';
    $token_address = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84';
    $address = '0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790';
    
    // Set the initial values
    $initial_number = 3456;
    $reduction_rate = 0.5925587;
    
    $today_date = new DateTime();
    $start_date = new DateTime('2024-02-08'); // February 8, 2024

    // Calculate the number of days between the start date and today
    $days_difference = $start_date->diff($today_date)->days;
    
    // Calculate the emissions for today
    $emissions = max(0, $initial_number - ($days_difference * $reduction_rate));
    
    // API endpoint for getting token balance
    $api_url = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress={$token_address}&address={$address}&tag=latest&apikey={$api_key}";
    
    // Make API request
    $response = wp_remote_get($api_url);
    
    // Check for errors
    if (is_wp_error($response)) {
        echo 'Error fetching data from Etherscan: ' . $response->get_error_message();
    } else {
        // Parse the JSON response
        $data = json_decode(wp_remote_retrieve_body($response), true);

    // Check if the request was successful
    if ($data['status'] == 1) {
        $token_balance_wei = $data['result'];
        $token_balance = $token_balance_wei / 1e18; // Convert wei to MOR

        // Calculate MOR earned per stETH contributed
        $mor_per_steth =  $emissions / $token_balance;
        $weekly_mor_per_steth =  number_format($mor_per_steth * 7, 5);
        $monthly_mor_per_steth =  number_format($mor_per_steth * 365/12, 5);
        $yearly_mor_per_steth =  number_format($mor_per_steth * 365, 5);

        echo "Daily: " . number_format($mor_per_steth, 5) . "<br>";
        echo "Weekly: $weekly_mor_per_steth<br>";
        echo "Monthly: $monthly_mor_per_steth<br>";
        echo "Yearly: $yearly_mor_per_steth<br>";
    } else {
        echo 'Etherscan API request failed: ' . $data['message'];
    }
    }

## Bootstrap Countdown
    <div class="container mt-4">
    <h3 style="color: #4dff00;">Bootstrap End: <span id="countdown"></span></h3>
    </div>

    <script>
    // Set the date we're counting down to
    var countDownDate = new Date("May 8, 2024 12:00:00 UTC").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
    }, 1000);
    </script>

## Emissions Calculations

    // Set the initial values
    $initial_number = 14400;
    $reduction_rate = 2.468994701;

    $today_date = new DateTime();
    $start_date = new DateTime('2024-02-08'); // February 8, 2024

    // Calculate the number of days between the start date and today
    $days_difference = $start_date->diff($today_date)->days;

    // Calculate the emissions for today
    $emissions = number_format(max(0, $initial_number - ($days_difference * $reduction_rate)));
    echo  "$emissions";

## stETH Withdrawals

    $apiKey = "[insert your API key]";
    $contractAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
    $walletAddress = "0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790";
    $startBlock = 0;
    $endBlock = 27025780;
    $offset = 100;
    $sort = "desc";
    
    $url = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=$contractAddress&address=$walletAddress&startblock=$startBlock&endblock=$endBlock&offset=$offset&sort=$sort&apikey=$apiKey";
    
    $response = file_get_contents($url);
    
    if ($response === false) {
        die("Error fetching data from Etherscan API");
    }
    
    $data = json_decode($response, true);
    
    // Check if the request was successful
    if ($data['status'] == 1) {
        $transactions = $data['result'];
        
        // Initialize the total variable
        $totalValue = 0;
    
        // Process transactions with specific 'from' address
        foreach ($transactions as $transaction) {
            // Check if the 'from' address matches the desired wallet address
            if ($transaction['from'] == "0x47176b2af9885dc6c4575d4efd63895f7aaa4790") {
                // Convert the value from wei to ether
                $valueInEther = $transaction['value'] / 1e18;
    
                // Add the transaction value to the total
                $totalValue += $valueInEther;
            }
        }
    
        // Print the total value
        echo number_format($totalValue, 0) . " stETH" . "\n";
    } else {
        die("Etherscan API request failed: " . $data['message']);
    }

## stETH Rewards for Morpheus

    $apiEndpoint = 'https://stake.lido.fi/api/rewards?address=0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790&currency=usd&onlyRewards=true&archiveRate=true&skip=0&limit=100';
    
    // Fetch data from the API endpoint
    $jsonOutput = file_get_contents($apiEndpoint);
    
    $data = json_decode($jsonOutput, true);
    
    if ($data && isset($data['totals']['ethRewards'], $data['totals']['currencyRewards'])) {
        $ethRewards = number_format($data['totals']['ethRewards'] / 1e18, 2, '.', ',');
        $currencyRewards = number_format($data['totals']['currencyRewards'], 2, '.', ',');
    
        // Now you can use $ethRewards and $currencyRewards as needed
        echo 'ETH Rewards: ' . $ethRewards . '<br>';
        echo 'USD Rewards: ' . $currencyRewards;
    } else {
        echo 'Error parsing JSON or missing required fields.';
    }

