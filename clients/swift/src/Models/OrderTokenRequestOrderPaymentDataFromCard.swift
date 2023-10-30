//
// OrderTokenRequestOrderPaymentDataFromCard.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Objeto con la informacion de la tarjeta */
public struct OrderTokenRequestOrderPaymentDataFromCard: Codable, JSONEncodable, Hashable {

    public enum CardBrand: String, Codable, CaseIterable {
        case visa = "Visa"
        case mastercard = "Mastercard"
        case americanExpress = "American Express"
        case diners = "Diners"
    }
    /** Procesador de la tarjeta */
    public var cardBrand: CardBrand?
    /** Primeros 6 digitos de la tarjeta */
    public var firstSix: String?
    /** Ultimos 4 digitos de la tarjeta */
    public var lastFour: String?

    public init(cardBrand: CardBrand? = nil, firstSix: String? = nil, lastFour: String? = nil) {
        self.cardBrand = cardBrand
        self.firstSix = firstSix
        self.lastFour = lastFour
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case cardBrand = "card_brand"
        case firstSix = "first_six"
        case lastFour = "last_four"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(cardBrand, forKey: .cardBrand)
        try container.encodeIfPresent(firstSix, forKey: .firstSix)
        try container.encodeIfPresent(lastFour, forKey: .lastFour)
    }
}

