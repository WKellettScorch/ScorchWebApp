# List of components to create
$components = @('MainLayout', 'SideNavBar', 'NavItem', 'Logo', 'MapView', 'Pin', 'PinInfo', 'CustomersView', 'JobsView', 'GoogleReviewsView', 'ImageUploaderView', 'SettingsView', 'BackButton', 'Modal', 'Loader', 'ErrorBoundary')

# Loop through each component and create the necessary folders/files
foreach ($component in $components) {
    # Create the component folder
    New-Item -Path . -Name $component -ItemType Directory

    # Navigate to the component folder
    Set-Location -Path $component

    # Create the component file and stylesheet
    New-Item -Path . -Name "$component.js" -ItemType File
    New-Item -Path . -Name "$component.css" -ItemType File

    # Return to the main 'components' folder
    Set-Location -Path ..
}

# Additional shared styles/theme directory
New-Item -Path . -Name "styles" -ItemType Directory
