//
// PostUsersUserIdCards201ResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PostUsersUserIdCards201ResponseData: Codable, JSONEncodable, Hashable {

    /** Nombre del tarjetahabiente */
    public var cardHolder: String?
    /** Número de identificación del tarjetahabiente */
    public var cardHolderDni: String?
    /** Compañia que emite la tarjeta */
    public var company: String?
    /** Fecha en que fue creada la tarjeta  (UTC) */
    public var createdAt: String?
    /** En caso de que el usuario elimine una tarjeta, se le da de baja con la fecha y se destruye el token de la tarjeta esta se manteniene para fines financieron y legales */
    public var deletedAt: String?
    /** Fecha de expiración */
    public var expirationDate: String?
    /** Primero 6 dígitos de la tarjeta */
    public var firstSix: String?
    /** Identificador único de la tarjeta */
    public var id: String?
    /** Últimos 4 dígitos de la tarjeta */
    public var lastFour: String?
    /** Fecha de modificacion de la tarjeta  (UTC) */
    public var updatedAt: String?
    /** Identificador del usuario */
    public var userId: String?
    /** Fecha de verificación de la tarjeta (UTC) */
    public var verifiedAt: String?
    /** Describe el flujo por el cual verificó la tarjeta este puede ser por card_verifier,payment, empty string tarjeta no verificada */
    public var verifiedBy: String?
    /** Identificador de la transacción que verificó la tarjeta */
    public var verifiedWithTransactionId: String?

    public init(cardHolder: String? = nil, cardHolderDni: String? = nil, company: String? = nil, createdAt: String? = nil, deletedAt: String? = nil, expirationDate: String? = nil, firstSix: String? = nil, id: String? = nil, lastFour: String? = nil, updatedAt: String? = nil, userId: String? = nil, verifiedAt: String? = nil, verifiedBy: String? = nil, verifiedWithTransactionId: String? = nil) {
        self.cardHolder = cardHolder
        self.cardHolderDni = cardHolderDni
        self.company = company
        self.createdAt = createdAt
        self.deletedAt = deletedAt
        self.expirationDate = expirationDate
        self.firstSix = firstSix
        self.id = id
        self.lastFour = lastFour
        self.updatedAt = updatedAt
        self.userId = userId
        self.verifiedAt = verifiedAt
        self.verifiedBy = verifiedBy
        self.verifiedWithTransactionId = verifiedWithTransactionId
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case cardHolder = "card_holder"
        case cardHolderDni = "card_holder_dni"
        case company
        case createdAt = "created_at"
        case deletedAt = "deleted_at"
        case expirationDate = "expiration_date"
        case firstSix = "first_six"
        case id
        case lastFour = "last_four"
        case updatedAt = "updated_at"
        case userId = "user_id"
        case verifiedAt = "verified_at"
        case verifiedBy = "verified_by"
        case verifiedWithTransactionId = "verified_with_transaction_id"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(cardHolder, forKey: .cardHolder)
        try container.encodeIfPresent(cardHolderDni, forKey: .cardHolderDni)
        try container.encodeIfPresent(company, forKey: .company)
        try container.encodeIfPresent(createdAt, forKey: .createdAt)
        try container.encodeIfPresent(deletedAt, forKey: .deletedAt)
        try container.encodeIfPresent(expirationDate, forKey: .expirationDate)
        try container.encodeIfPresent(firstSix, forKey: .firstSix)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(lastFour, forKey: .lastFour)
        try container.encodeIfPresent(updatedAt, forKey: .updatedAt)
        try container.encodeIfPresent(userId, forKey: .userId)
        try container.encodeIfPresent(verifiedAt, forKey: .verifiedAt)
        try container.encodeIfPresent(verifiedBy, forKey: .verifiedBy)
        try container.encodeIfPresent(verifiedWithTransactionId, forKey: .verifiedWithTransactionId)
    }
}

