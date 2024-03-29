//
// GetUserInformation200Response.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/**  */
public struct GetUserInformation200Response: Codable, JSONEncodable, Hashable {

    static let createdAtRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let emailRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let firstNameRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let idRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let lastNameRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let merchantIdRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let phoneRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let updatedAtRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    public var createdAt: String?
    public var deletedAt: AnyCodable?
    public var email: String?
    public var firstName: String?
    public var id: String?
    public var identityProviders: Set<GetUserInformation200ResponseIdentityProvidersInner>?
    public var isGuest: Bool?
    public var isPhoneVerified: Bool?
    public var lastName: String?
    public var merchantId: String?
    public var phone: String?
    public var updatedAt: String?

    public init(createdAt: String? = nil, deletedAt: AnyCodable? = nil, email: String? = nil, firstName: String? = nil, id: String? = nil, identityProviders: Set<GetUserInformation200ResponseIdentityProvidersInner>? = nil, isGuest: Bool? = nil, isPhoneVerified: Bool? = nil, lastName: String? = nil, merchantId: String? = nil, phone: String? = nil, updatedAt: String? = nil) {
        self.createdAt = createdAt
        self.deletedAt = deletedAt
        self.email = email
        self.firstName = firstName
        self.id = id
        self.identityProviders = identityProviders
        self.isGuest = isGuest
        self.isPhoneVerified = isPhoneVerified
        self.lastName = lastName
        self.merchantId = merchantId
        self.phone = phone
        self.updatedAt = updatedAt
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case createdAt = "created_at"
        case deletedAt = "deleted_at"
        case email
        case firstName = "first_name"
        case id
        case identityProviders = "identity_providers"
        case isGuest = "is_guest"
        case isPhoneVerified = "is_phone_verified"
        case lastName = "last_name"
        case merchantId = "merchant_id"
        case phone
        case updatedAt = "updated_at"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(createdAt, forKey: .createdAt)
        try container.encodeIfPresent(deletedAt, forKey: .deletedAt)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(firstName, forKey: .firstName)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(identityProviders, forKey: .identityProviders)
        try container.encodeIfPresent(isGuest, forKey: .isGuest)
        try container.encodeIfPresent(isPhoneVerified, forKey: .isPhoneVerified)
        try container.encodeIfPresent(lastName, forKey: .lastName)
        try container.encodeIfPresent(merchantId, forKey: .merchantId)
        try container.encodeIfPresent(phone, forKey: .phone)
        try container.encodeIfPresent(updatedAt, forKey: .updatedAt)
    }
}

