<script>
    document.getElementById('settingsModal').addEventListener('show.bs.modal', function (event) {
        // Code to handle the opening of the modal, e.g., loading current settings
    });

    // Example function to handle 'Save Changes' button click
    function saveSettings() {
        var setting1Value = document.getElementById('setting1').value;
        // Save the settings or perform actions
        console.log('Settings saved:', setting1Value);
        // Close the modal after saving
        var settingsModal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
        settingsModal.hide();
    }

    document.querySelector('#settingsModal .btn-primary').addEventListener('click', saveSettings);
</script>
