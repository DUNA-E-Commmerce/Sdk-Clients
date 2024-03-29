//
// GetMerchantStores200ResponseStoresInner.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct GetMerchantStores200ResponseStoresInner: Codable, JSONEncodable, Hashable {

    public var address: String?
    public var createdAt: String?
    public var id: String?
    public var isDefault: Bool?
    public var latitude: Double?
    public var longitude: Double?
    public var name: String?
    public var updatedAt: String?

    public init(address: String? = nil, createdAt: String? = nil, id: String? = nil, isDefault: Bool? = nil, latitude: Double? = nil, longitude: Double? = nil, name: String? = nil, updatedAt: String? = nil) {
        self.address = address
        self.createdAt = createdAt
        self.id = id
        self.isDefault = isDefault
        self.latitude = latitude
        self.longitude = longitude
        self.name = name
        self.updatedAt = updatedAt
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case address
        case createdAt = "created_at"
        case id
        case isDefault = "is_default"
        case latitude
        case longitude
        case name
        case updatedAt = "updated_at"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(address, forKey: .address)
        try container.encodeIfPresent(createdAt, forKey: .createdAt)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(isDefault, forKey: .isDefault)
        try container.encodeIfPresent(latitude, forKey: .latitude)
        try container.encodeIfPresent(longitude, forKey: .longitude)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(updatedAt, forKey: .updatedAt)
    }
}

