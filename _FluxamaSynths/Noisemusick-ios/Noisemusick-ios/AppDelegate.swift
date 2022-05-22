//
//  AppDelegate.swift
//  Noisemusick-ios
//
//  Created by Shawn Wallace on 1/1/22.
//

import UIKit
import libpd

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var audioController: PdAudioController?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        //libpd
        audioController = PdAudioController()
        if let c = audioController {
            //let s = c.configurePlaybackWithSampleRate(44100, numberChannels: 2, inputEnabled: false, mixingEnabled: true).toPdAudioControlStatus()
            let s = c.configureAmbient(withSampleRate: 44100, numberChannels: 2, mixingEnabled: true).toPdAudioControlStatus()
            switch s {
            case .ok:
                print("success")
            case .error:
                print("unrecoverable error: failed to initialize audio components")
            case .propertyChanged:
                print("some properties have changed to run correctly (not fatal)")
            }
        } else {
            print("could not get PdAudioController")
        }
        return true
    }

    /*
    func applicationWillResignActive(_ application: UIApplication) {
        audioController?.isActive = false
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        audioController?.isActive = true
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }*/
    
    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        // Called when a new scene session is being created.
        // Use this method to select a configuration to create the new scene with.
        audioController?.isActive = true
        
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }

    func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
        // Called when the user discards a scene session.
        // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
        // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
        audioController?.isActive = false
    }
}


// MARK: - CONVERT ENUM FOR SWIFT

extension PdAudioStatus {
    enum PdAudioControlStatus {
        case ok
        case error
        case propertyChanged
    }
    func toPdAudioControlStatus() -> PdAudioControlStatus {
        switch self.rawValue {
        case 0: //
            return .ok
        case -1: //
            return .error
        default: //
            return .propertyChanged
        }
    }
}
