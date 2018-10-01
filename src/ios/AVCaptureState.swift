    //  AVCaptureState.swift
    //  SwiftyWebRTC
    //	d1bug
    //

    import Foundation
    import AVFoundation

    class AVCaptureState {
        static var isVideoDisabled: Bool{
           let status = AVCaptureDevice.authorizationStatus(forMediaType: AVMediaTypeVideo)
            return status == .restricted || status == .denied
        }

        static var isAudioDisabled: Bool {
            let status = AVCaptureDevice.authorizationStatus(forMediaType: AVMediaTypeAudio)
            return status == .restricted || status == .denied
        }
    }
