//
// GetPaymentMethods200ResponseDataInner.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct GetPaymentMethods200ResponseDataInner: Codable, JSONEncodable, Hashable {

    /** Indica si se permite el plan de cuotas para este método de pago. */
    public var allowInstallmentsPlan: Bool?
    /** Nombre del método de pago alternativo. */
    public var alternativePaymentMethodName: String?
    /** Indica si el método de pago está habilitado. */
    public var enabled: Bool?
    /** Esquema de entrada para el método de pago. */
    public var inputSchema: AnyCodable?
    /** Etiquetas asociadas al método de pago. */
    public var labels: AnyCodable?
    /** Tipo de método de pago. */
    public var methodType: String?
    /** Nombre del procesador de pagos. */
    public var processorName: String?
    /** Valor de clasificación del método de pago. */
    public var sort: Int?
    public var specificFields: GetPaymentMethods200ResponseDataInnerSpecificFields?
    /** Equipo o plataforma asociada al método de pago. */
    public var team: String?

    public init(allowInstallmentsPlan: Bool? = nil, alternativePaymentMethodName: String? = nil, enabled: Bool? = nil, inputSchema: AnyCodable? = nil, labels: AnyCodable? = nil, methodType: String? = nil, processorName: String? = nil, sort: Int? = nil, specificFields: GetPaymentMethods200ResponseDataInnerSpecificFields? = nil, team: String? = nil) {
        self.allowInstallmentsPlan = allowInstallmentsPlan
        self.alternativePaymentMethodName = alternativePaymentMethodName
        self.enabled = enabled
        self.inputSchema = inputSchema
        self.labels = labels
        self.methodType = methodType
        self.processorName = processorName
        self.sort = sort
        self.specificFields = specificFields
        self.team = team
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case allowInstallmentsPlan = "allow_installments_plan"
        case alternativePaymentMethodName = "alternative_payment_method_name"
        case enabled
        case inputSchema = "input_schema"
        case labels
        case methodType = "method_type"
        case processorName = "processor_name"
        case sort
        case specificFields = "specific_fields"
        case team
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(allowInstallmentsPlan, forKey: .allowInstallmentsPlan)
        try container.encodeIfPresent(alternativePaymentMethodName, forKey: .alternativePaymentMethodName)
        try container.encodeIfPresent(enabled, forKey: .enabled)
        try container.encodeIfPresent(inputSchema, forKey: .inputSchema)
        try container.encodeIfPresent(labels, forKey: .labels)
        try container.encodeIfPresent(methodType, forKey: .methodType)
        try container.encodeIfPresent(processorName, forKey: .processorName)
        try container.encodeIfPresent(sort, forKey: .sort)
        try container.encodeIfPresent(specificFields, forKey: .specificFields)
        try container.encodeIfPresent(team, forKey: .team)
    }
}
