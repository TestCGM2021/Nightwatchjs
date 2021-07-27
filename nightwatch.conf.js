{
    module.exports = {
        src_folders: ["./tests"],
        page_objects_path: "./pageObjects",   
        test_settings: {
            chrome: {
                desiredCapabilities: {
                    browserName: 'chrome'
                },
                webdriver: {
                    start_process: true,
                    server_path: require('chromedriver').path,
                }
            },
    
            firefox: {
                desiredCapabilities: {
                    browserName: 'firefox'
                },
                webdriver: {
                    start_process: true,
                    server_path: require('geckodriver').path
                }
            }
        }
    }
}