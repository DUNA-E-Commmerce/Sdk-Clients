//
// PurchaseRequestSpecificFields.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PurchaseRequestSpecificFields: Codable, JSONEncodable, Hashable {

    public var callbacks: PurchaseRequestSpecificFieldsCallbacks?
    public var description: String?
    public var financialInstitution: String?

    public init(callbacks: PurchaseRequestSpecificFieldsCallbacks? = nil, description: String? = nil, financialInstitution: String? = nil) {
        self.callbacks = callbacks
        self.description = description
        self.financialInstitution = financialInstitution
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case callbacks
        case description
        case financialInstitution = "financial_institution"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(callbacks, forKey: .callbacks)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(financialInstitution, forKey: .financialInstitution)
    }
}

