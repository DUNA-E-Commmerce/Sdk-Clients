//
// OrderTokenRequestOrderGiftCardInner.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Se usa para configurar los datos de una tarjeta de regalo */
public struct OrderTokenRequestOrderGiftCardInner: Codable, JSONEncodable, Hashable {

    /** Monto de la gift card. Debe estar expresada en número entero con los dos últimos numeros representando decimales */
    public var amount: Double?
    /** Código de la tarjeta de regalo */
    public var code: String?
    /** Descripción adicional de la tarjeta de regalo */
    public var description: String?
    /** Detalle de la URL del servicio de origen que provee el descuento */
    public var detailsUrl: String?
    /** Referencia de la tarjeta de regalo aplicada */
    public var reference: String?

    public init(amount: Double? = nil, code: String? = nil, description: String? = nil, detailsUrl: String? = nil, reference: String? = nil) {
        self.amount = amount
        self.code = code
        self.description = description
        self.detailsUrl = detailsUrl
        self.reference = reference
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case amount
        case code
        case description
        case detailsUrl = "details_url"
        case reference
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(amount, forKey: .amount)
        try container.encodeIfPresent(code, forKey: .code)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(detailsUrl, forKey: .detailsUrl)
        try container.encodeIfPresent(reference, forKey: .reference)
    }
}

