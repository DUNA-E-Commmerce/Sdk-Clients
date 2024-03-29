//
// GetMerchantsPaymentsMethods200ResponseDataInner.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct GetMerchantsPaymentsMethods200ResponseDataInner: Codable, JSONEncodable, Hashable {

    /** Nombre alternativo del método de pago */
    public var alternativePaymentMethodName: String?
    /** Si el método de pago se encuentra disponible dentro de la tienda */
    public var enabled: Bool?
    /** Si no es necesario enviar el CVV */
    public var excludeCvv: Bool?
    /** Franquicias exclúidos */
    public var excludedFranchises: [String]?
    /** Lista de los campos necesarios para realizar un pago con ese método de pago. */
    public var inputSchema: [GetMerchantsPaymentsMethods200ResponseDataInnerInputSchemaInner]?
    public var labels: GetMerchantsPaymentsMethods200ResponseDataInnerLabels?
    /** Método de pago */
    public var methodType: String?
    /** Nombre del procesador de pago */
    public var processorName: String?
    public var specificFields: GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields?

    public init(alternativePaymentMethodName: String? = nil, enabled: Bool? = nil, excludeCvv: Bool? = nil, excludedFranchises: [String]? = nil, inputSchema: [GetMerchantsPaymentsMethods200ResponseDataInnerInputSchemaInner]? = nil, labels: GetMerchantsPaymentsMethods200ResponseDataInnerLabels? = nil, methodType: String? = nil, processorName: String? = nil, specificFields: GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields? = nil) {
        self.alternativePaymentMethodName = alternativePaymentMethodName
        self.enabled = enabled
        self.excludeCvv = excludeCvv
        self.excludedFranchises = excludedFranchises
        self.inputSchema = inputSchema
        self.labels = labels
        self.methodType = methodType
        self.processorName = processorName
        self.specificFields = specificFields
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case alternativePaymentMethodName = "alternative_payment_method_name"
        case enabled
        case excludeCvv = "exclude_cvv"
        case excludedFranchises = "excluded_franchises"
        case inputSchema = "input_schema"
        case labels
        case methodType = "method_type"
        case processorName = "processor_name"
        case specificFields = "specific_fields"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(alternativePaymentMethodName, forKey: .alternativePaymentMethodName)
        try container.encodeIfPresent(enabled, forKey: .enabled)
        try container.encodeIfPresent(excludeCvv, forKey: .excludeCvv)
        try container.encodeIfPresent(excludedFranchises, forKey: .excludedFranchises)
        try container.encodeIfPresent(inputSchema, forKey: .inputSchema)
        try container.encodeIfPresent(labels, forKey: .labels)
        try container.encodeIfPresent(methodType, forKey: .methodType)
        try container.encodeIfPresent(processorName, forKey: .processorName)
        try container.encodeIfPresent(specificFields, forKey: .specificFields)
    }
}

