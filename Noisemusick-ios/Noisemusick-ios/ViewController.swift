//
//  ViewController.swift
//  Noisemusick-ios
//
//  Created by Shawn Wallace on 1/1/22.
//

import UIKit
import WebKit
import Foundation
import GCDWebServer
import libpd

class ViewController: UIViewController, WKUIDelegate, WKScriptMessageHandler, PdListener {
    var webServer = GCDWebServer()
    var webView: WKWebView!
    var dispatcher: PdDispatcher?

    func webView(_ webView: WKWebView,
        runJavaScriptAlertPanelWithMessage message: String,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping () -> Void) {
        
        // Set the message as the UIAlertController message
        let alert = UIAlertController(
            title: nil,
            message: message,
            preferredStyle: .alert
        )

        // Add a confirmation action “OK”
        let okAction = UIAlertAction(
            title: "OK",
            style: .default,
            handler: { _ in
                // Call completionHandler
                completionHandler()
            }
        )
        alert.addAction(okAction)

        // Display the NSAlert
        present(alert, animated: true, completion: nil)
    }
    override func loadView() {
        
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.allowsInlineMediaPlayback = true;
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
        // inject JS to capture console.log output and send to iOS
        let source = "function captureLog(msg) { window.webkit.messageHandlers.logHandler.postMessage(msg); } window.console.log = captureLog;"
        let script = WKUserScript(source: source, injectionTime: .atDocumentEnd, forMainFrameOnly: false)
        webView.configuration.userContentController.addUserScript(script)
        // register the bridge script that listens for the output
        webView.configuration.userContentController.add(self, name: "logHandler")
        webView.configuration.userContentController.add(self, name: "libpd")
        //view.backgroundColor = UIColor(red:0, green:0, blue:0, alpha:1)
        //webView.isOpaque = false;
        //webView.backgroundColor = UIColor(red:0, green:0, blue:0, alpha:1)

    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "logHandler" {
            print("LOG: \(message.body)")
        }
        if message.name == "libpd" {
            print("LOG: \(message.body)")
           
            let script = "document.getElementById('hi-there').innerHTML = 'Hi there!';"
            webView.evaluateJavaScript(script) { (result, error) in
                if let result = result {
                    print("Label is updated with message: \(result)")
                } else if let error = error {
                    print("An error occurred: \(error)")
                }
            }
        }
    }
    
    override func viewDidLoad() {
        //libpd
        dispatcher = PdDispatcher()
        dispatcher?.add(self, forSource: "bang_bang")
        dispatcher?.add(self, forSource: "counter")
        PdBase.setDelegate(dispatcher)
        if PdBase.openFile("sample.pd", path: Bundle.main.resourcePath) == nil {
            print("Failed to open patch!")
        }
        initWebServer()
        super.viewDidLoad()
        loadWebPage()
    }
    
    func loadWebPage() {
        
        WKWebsiteDataStore.default().removeData(ofTypes: [WKWebsiteDataTypeDiskCache, WKWebsiteDataTypeMemoryCache], modifiedSince: Date(timeIntervalSince1970: 0), completionHandler:{ })
               
       //DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
       let url = self.webServer.serverURL!
       self.webView.load(URLRequest(url: url))
       //}
    }
    

    func initWebServer() {

        let urlpath = Bundle.main.resourceURL!.appendingPathComponent("StreamingAssets/").path
   
        print(String(describing: urlpath))
        webServer.addGETHandler(forBasePath:"/", directoryPath:urlpath, indexFilename:"index.html", cacheAge:3600, allowRangeRequests:true)
        
        let options:[String : Any] = ["Port" : 8080, "AutomaticallySuspendInBackground" : false]
        print("waiting for server")
        try! webServer.start(options: options)
        print("Visit \(String(describing: webServer.serverURL)) in your web browser")
    }
}
