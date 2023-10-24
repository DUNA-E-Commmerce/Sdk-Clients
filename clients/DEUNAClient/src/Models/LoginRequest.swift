//
// LoginRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/**  */
public struct LoginRequest: Codable, JSONEncodable, Hashable {

    static let emailRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let passwordRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    public var email: String?
    public var password: String?

    public init(email: String? = nil, password: String? = nil) {
        self.email = email
        self.password = password
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case password
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(password, forKey: .password)
    }
}

