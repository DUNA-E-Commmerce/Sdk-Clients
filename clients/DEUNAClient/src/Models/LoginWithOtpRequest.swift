//
// LoginWithOtpRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct LoginWithOtpRequest: Codable, JSONEncodable, Hashable {

    /** Email del usuario */
    public var email: String
    /** Código OTP enviado al usuario */
    public var otp: String?

    public init(email: String, otp: String? = nil) {
        self.email = email
        self.otp = otp
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case otp
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(email, forKey: .email)
        try container.encodeIfPresent(otp, forKey: .otp)
    }
}

