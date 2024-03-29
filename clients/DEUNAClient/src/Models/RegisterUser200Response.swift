//
// RegisterUser200Response.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct RegisterUser200Response: Codable, JSONEncodable, Hashable {

    public var token: String?
    public var userId: String?

    public init(token: String? = nil, userId: String? = nil) {
        self.token = token
        self.userId = userId
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case token
        case userId = "user_id"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(token, forKey: .token)
        try container.encodeIfPresent(userId, forKey: .userId)
    }
}

