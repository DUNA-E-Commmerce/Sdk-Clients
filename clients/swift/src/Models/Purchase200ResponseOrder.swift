//
// Purchase200ResponseOrder.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Purchase200ResponseOrder: Codable, JSONEncodable, Hashable {

    public enum Status: String, Codable, CaseIterable {
        case pending = "pending"
        case succeeded = "succeeded"
        case cancelled = "cancelled"
        case refund = "refund"
        case processed = "processed"
        case authorized = "authorized"
    }
    static let userInstructionsRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    public var billingAddress: PurchaseRequestBillingAddress?
    /** Cambio solicitado por el cliente */
    public var cashChange: Double?
    /** Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 */
    public var currency: String?
    /** Son los descuentos aplicados en la orden */
    public var discounts: Set<AnyCodable>?
    /** Es el costo total de todos los items de la orden que se mostrara en el checkout */
    public var displayItemsTotalAmount: String?
    /** Es el costo total del envío de la orden que se mostrara en el checkout. */
    public var displayShippingAmount: String?
    /** Es el subtotal de la compra, que comprende la suma de items_total_amount y shipping_amount que se mostrara en el checkout. */
    public var displaySubTotal: String?
    /** Es el monto total de los **impuestos** aplicados en la orden que aparece en el checkout. */
    public var displayTaxAmount: String?
    /** Es el total de la orden esto comprende la suma del total de *items_total_amount*, *shipping_amount* y *tax_amount* que se mostrara en el checkout. */
    public var displayTotalAmount: String?
    /** Monto de descuento total de la orden que se mostrara en el checkout */
    public var displayTotalDiscount: String?
    /** tarjeta de regalo */
    public var giftCard: [AnyCodable]?
    /** Detalle de los productos que se encuentran en la orden */
    public var items: [Purchase200ResponseOrderItemsInner]?
    /** Es el costo total de todos los items de la orden. */
    public var itemsTotalAmount: Double?
    public var metadata: OrderToken200ResponseOrderMetadata?
    /** Representa al identificador de la orden dentro del comercio */
    public var orderId: String?
    public var payment: Purchase200ResponseOrderPayment?
    /** Es el link de pago generado al tokenizar la orden para efectuar el pago */
    public var paymentLink: String?
    /** Url donde se redireccionara al terminar la compra */
    public var redirectUrl: String?
    /** Fecha de entrega */
    public var scheduledAt: String?
    public var shippingAddress: OrderTokenRequestOrderShippingAddress?
    /** Es el costo total del envío de la orden. */
    public var shippingAmount: Double?
    /** Métodos de envío */
    public var shippingMethods: [AnyCodable]?
    /** Son los métodos de envío disponibles de la orden, actualmente tenemos delivery, pickup y dinein */
    public var shippingOptions: AnyCodable?
    /** Estado de la orden  */
    public var status: Status?
    /** Es el código de la tienda, por defecto el código de la tienda es all */
    public var storeCode: String?
    /** Es el subtotal de la compra, que comprende la suma de items_total_amount y shipping_amount. */
    public var subTotal: Double?
    /** Es el monto total de los **impuestos** aplicados en la orden. */
    public var taxAmount: Double?
    /** Representa la zona horario de tu comercio */
    public var timezone: String?
    /** Es el total de la orden esto comprende la suma del total de *items_total_amount*, *shipping_amount* y *tax_amount*. */
    public var totalAmount: Double?
    /** Monto de descuento total de la orden */
    public var totalDiscount: Double?
    /** Son las instrucciones especiales que da el cliente en su compra, este valor se sustituye por el comentario en caso que el cliente lo coloque dentro del *checkout* */
    public var userInstructions: String?

    public init(billingAddress: PurchaseRequestBillingAddress? = nil, cashChange: Double? = nil, currency: String? = nil, discounts: Set<AnyCodable>? = nil, displayItemsTotalAmount: String? = nil, displayShippingAmount: String? = nil, displaySubTotal: String? = nil, displayTaxAmount: String? = nil, displayTotalAmount: String? = nil, displayTotalDiscount: String? = nil, giftCard: [AnyCodable]? = nil, items: [Purchase200ResponseOrderItemsInner]? = nil, itemsTotalAmount: Double? = nil, metadata: OrderToken200ResponseOrderMetadata? = nil, orderId: String? = nil, payment: Purchase200ResponseOrderPayment? = nil, paymentLink: String? = nil, redirectUrl: String? = nil, scheduledAt: String? = nil, shippingAddress: OrderTokenRequestOrderShippingAddress? = nil, shippingAmount: Double? = nil, shippingMethods: [AnyCodable]? = nil, shippingOptions: AnyCodable? = nil, status: Status? = nil, storeCode: String? = nil, subTotal: Double? = nil, taxAmount: Double? = nil, timezone: String? = nil, totalAmount: Double? = nil, totalDiscount: Double? = nil, userInstructions: String? = nil) {
        self.billingAddress = billingAddress
        self.cashChange = cashChange
        self.currency = currency
        self.discounts = discounts
        self.displayItemsTotalAmount = displayItemsTotalAmount
        self.displayShippingAmount = displayShippingAmount
        self.displaySubTotal = displaySubTotal
        self.displayTaxAmount = displayTaxAmount
        self.displayTotalAmount = displayTotalAmount
        self.displayTotalDiscount = displayTotalDiscount
        self.giftCard = giftCard
        self.items = items
        self.itemsTotalAmount = itemsTotalAmount
        self.metadata = metadata
        self.orderId = orderId
        self.payment = payment
        self.paymentLink = paymentLink
        self.redirectUrl = redirectUrl
        self.scheduledAt = scheduledAt
        self.shippingAddress = shippingAddress
        self.shippingAmount = shippingAmount
        self.shippingMethods = shippingMethods
        self.shippingOptions = shippingOptions
        self.status = status
        self.storeCode = storeCode
        self.subTotal = subTotal
        self.taxAmount = taxAmount
        self.timezone = timezone
        self.totalAmount = totalAmount
        self.totalDiscount = totalDiscount
        self.userInstructions = userInstructions
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case billingAddress = "billing_address"
        case cashChange = "cash_change"
        case currency
        case discounts
        case displayItemsTotalAmount = "display_items_total_amount"
        case displayShippingAmount = "display_shipping_amount"
        case displaySubTotal = "display_sub_total"
        case displayTaxAmount = "display_tax_amount"
        case displayTotalAmount = "display_total_amount"
        case displayTotalDiscount = "display_total_discount"
        case giftCard = "gift_card"
        case items
        case itemsTotalAmount = "items_total_amount"
        case metadata
        case orderId = "order_id"
        case payment
        case paymentLink = "payment_link"
        case redirectUrl = "redirect_url"
        case scheduledAt = "scheduled_at"
        case shippingAddress = "shipping_address"
        case shippingAmount = "shipping_amount"
        case shippingMethods = "shipping_methods"
        case shippingOptions = "shipping_options"
        case status
        case storeCode = "store_code"
        case subTotal = "sub_total"
        case taxAmount = "tax_amount"
        case timezone
        case totalAmount = "total_amount"
        case totalDiscount = "total_discount"
        case userInstructions = "user_instructions"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(billingAddress, forKey: .billingAddress)
        try container.encodeIfPresent(cashChange, forKey: .cashChange)
        try container.encodeIfPresent(currency, forKey: .currency)
        try container.encodeIfPresent(discounts, forKey: .discounts)
        try container.encodeIfPresent(displayItemsTotalAmount, forKey: .displayItemsTotalAmount)
        try container.encodeIfPresent(displayShippingAmount, forKey: .displayShippingAmount)
        try container.encodeIfPresent(displaySubTotal, forKey: .displaySubTotal)
        try container.encodeIfPresent(displayTaxAmount, forKey: .displayTaxAmount)
        try container.encodeIfPresent(displayTotalAmount, forKey: .displayTotalAmount)
        try container.encodeIfPresent(displayTotalDiscount, forKey: .displayTotalDiscount)
        try container.encodeIfPresent(giftCard, forKey: .giftCard)
        try container.encodeIfPresent(items, forKey: .items)
        try container.encodeIfPresent(itemsTotalAmount, forKey: .itemsTotalAmount)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encodeIfPresent(orderId, forKey: .orderId)
        try container.encodeIfPresent(payment, forKey: .payment)
        try container.encodeIfPresent(paymentLink, forKey: .paymentLink)
        try container.encodeIfPresent(redirectUrl, forKey: .redirectUrl)
        try container.encodeIfPresent(scheduledAt, forKey: .scheduledAt)
        try container.encodeIfPresent(shippingAddress, forKey: .shippingAddress)
        try container.encodeIfPresent(shippingAmount, forKey: .shippingAmount)
        try container.encodeIfPresent(shippingMethods, forKey: .shippingMethods)
        try container.encodeIfPresent(shippingOptions, forKey: .shippingOptions)
        try container.encodeIfPresent(status, forKey: .status)
        try container.encodeIfPresent(storeCode, forKey: .storeCode)
        try container.encodeIfPresent(subTotal, forKey: .subTotal)
        try container.encodeIfPresent(taxAmount, forKey: .taxAmount)
        try container.encodeIfPresent(timezone, forKey: .timezone)
        try container.encodeIfPresent(totalAmount, forKey: .totalAmount)
        try container.encodeIfPresent(totalDiscount, forKey: .totalDiscount)
        try container.encodeIfPresent(userInstructions, forKey: .userInstructions)
    }
}
