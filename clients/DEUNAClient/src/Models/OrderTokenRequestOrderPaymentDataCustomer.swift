//
// OrderTokenRequestOrderPaymentDataCustomer.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct OrderTokenRequestOrderPaymentDataCustomer: Codable, JSONEncodable, Hashable {

    /** Email del cliente */
    public var email: String?
    /** identificador del cliente  */
    public var id: String?

    public init(email: String? = nil, id: String? = nil) {
        self.email = email
        self.id = id
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case email
        case id
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(id, forKey: .id)
    }
}

