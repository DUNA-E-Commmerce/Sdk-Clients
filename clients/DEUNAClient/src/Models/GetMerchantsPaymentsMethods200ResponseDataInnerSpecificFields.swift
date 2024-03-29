//
// GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields: Codable, JSONEncodable, Hashable {

    public var financialInstitution: [GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFieldsFinancialInstitutionInner]?

    public init(financialInstitution: [GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFieldsFinancialInstitutionInner]? = nil) {
        self.financialInstitution = financialInstitution
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case financialInstitution = "financial_institution"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(financialInstitution, forKey: .financialInstitution)
    }
}

