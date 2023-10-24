//
// OrderTokenRequestOrderPaymentDataMerchant.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Datos del comercio */
public struct OrderTokenRequestOrderPaymentDataMerchant: Codable, JSONEncodable, Hashable {

    /** Identificador de la tienda */
    public var id: String?
    /** código de la tienda */
    public var storeCode: String?

    public init(id: String? = nil, storeCode: String? = nil) {
        self.id = id
        self.storeCode = storeCode
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case storeCode = "store_code"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(storeCode, forKey: .storeCode)
    }
}

