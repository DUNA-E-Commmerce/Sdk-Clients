//
// OrderTokenRequestOrderShippingOptionsDetailsAddressCoordinates.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Coordenada de la ubicación de la tienda en latitud y longitud */
public struct OrderTokenRequestOrderShippingOptionsDetailsAddressCoordinates: Codable, JSONEncodable, Hashable {

    /** Latitud de la dirección de la tienda */
    public var lat: Double
    /** Longitud de la dirección de la tienda */
    public var lng: Double

    public init(lat: Double, lng: Double) {
        self.lat = lat
        self.lng = lng
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case lat
        case lng
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(lat, forKey: .lat)
        try container.encode(lng, forKey: .lng)
    }
}
