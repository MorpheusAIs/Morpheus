import uuid
from datetime import datetime
import textwrap
import logging
import json
import pytz

class DiagnosticPromptGenerator:

    def __init__(self):
        logging.basicConfig(filename='diagnostic_log.txt', level=logging.INFO, format='%(asctime)s - %(message)s')

    def generate_diagnostic_prompt(self, description: str) -> str:
        """Generate a structured diagnostic prompt based on the issue description."""
        
        # Enhancements
        issue_id = f"ISS-{uuid.uuid4().hex[:8]}"
        date_reported = datetime.now(pytz.timezone('America/New_York')).strftime('%Y-%m-%d %H:%M:%S %Z')
        severity = self.evaluate_severity(description)
        
        diagnostic_prompt = f"""
        ## Diagnostic Issue Invoice
        **Issue ID**: {issue_id}
        **Description**: {description}
        **Severity**: {severity}
        **Date Reported**: {date_reported}
        
        ## Requirements for Diagnosis
        - **Observation**: Carefully examine the issue description and any related patterns or anomalies.
        - **Analysis**: Identify potential causes based on the symptoms and severity of the issue.
        - **Hypothesis Formation**: Formulate possible explanations for the observed behavior.

        ## Expected Diagnostic Actions
        - **Data Gathering**: Collect relevant data points and logs that may shed light on the issue.
        - **Problem Isolation**: Narrow down the possible causes to isolate the root cause.
        - **Solution Exploration**: Explore potential solutions or workarounds that can mitigate the issue.

        ## Desired Outcome
        - **Instruction Set for Resolution**: Provide a clear and actionable set of steps that can resolve the identified issue.
        - **Preventive Measures**: Suggest measures that can prevent the recurrence of this issue in the future.
        
        ## Additional Notes
        - Please ensure that the diagnosis and proposed solutions are documented thoroughly for future reference.
        - Consider the impact of proposed solutions on the system's overall stability and performance.
        - Only respond with the diagnostic report form.
        - Use keywords in the report to help other chatbots derive the actions needed to be taken.
        - The report received will be read directly by a chatbot, and reviewed by human observers.
        """

        # Logging
        logging.info("Diagnostic prompt generated for issue ID: %s", issue_id)
        
        # Rich Formatting
        wrapped_prompt = textwrap.fill(diagnostic_prompt, width=80)
        
        # Serialization example (storing severity for demonstration)
        diagnostic_data = {'issue_id': issue_id, 'severity': severity}
        with open(f'{issue_id}_diagnostic_session.json', 'w') as file:
            json.dump(diagnostic_data, file)
        
        return wrapped_prompt

    def evaluate_severity(self, description: str) -> str:
        """Dynamically evaluate the severity level based on keywords in the description."""
        critical_keywords = ['critical', 'failure', 'loss']
        if any(keyword in description.lower() for keyword in critical_keywords):
            return "Critical"
        return "High"

# Example usage
generator = DiagnosticPromptGenerator()
description = "System encountered an unexpected critical error after update."
prompt = print(generator.generate_diagnostic_prompt(description))
# ## This diagnostic prompt can be used to guide the diagnostic process for the reported issue.
# ## Feed directly into a chatbot or diagnostic system for further processing.