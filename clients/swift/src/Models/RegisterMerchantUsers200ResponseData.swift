//
// RegisterMerchantUsers200ResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct RegisterMerchantUsers200ResponseData: Codable, JSONEncodable, Hashable {

    static let createdAtRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let deletedAtRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let emailRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let idRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let lastUpdatedRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let merchantIdRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let nameRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let phoneRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let roleRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let storeCodeRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    public var createdAt: String?
    public var deletedAt: String?
    public var email: String?
    public var id: String?
    public var lastUpdated: String?
    public var merchantId: String?
    public var name: String?
    public var phone: String?
    public var role: String?
    public var storeCode: String?

    public init(createdAt: String? = nil, deletedAt: String? = nil, email: String? = nil, id: String? = nil, lastUpdated: String? = nil, merchantId: String? = nil, name: String? = nil, phone: String? = nil, role: String? = nil, storeCode: String? = nil) {
        self.createdAt = createdAt
        self.deletedAt = deletedAt
        self.email = email
        self.id = id
        self.lastUpdated = lastUpdated
        self.merchantId = merchantId
        self.name = name
        self.phone = phone
        self.role = role
        self.storeCode = storeCode
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case createdAt = "created_at"
        case deletedAt = "deleted_at"
        case email
        case id
        case lastUpdated = "last_updated"
        case merchantId = "merchant_id"
        case name
        case phone
        case role
        case storeCode = "store_code"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(createdAt, forKey: .createdAt)
        try container.encodeIfPresent(deletedAt, forKey: .deletedAt)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(lastUpdated, forKey: .lastUpdated)
        try container.encodeIfPresent(merchantId, forKey: .merchantId)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(phone, forKey: .phone)
        try container.encodeIfPresent(role, forKey: .role)
        try container.encodeIfPresent(storeCode, forKey: .storeCode)
    }
}
