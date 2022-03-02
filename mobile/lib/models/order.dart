import 'dart:convert';

import 'package:mobile/models/product.dart';

class Order {
  final int id;
  final String address;
  final double latitude;
  final double longitude;
  final String moment;
  final String status;
  final double total;
  final List<Product> products;

  Order(
      {required this.id,
      required this.address,
      required this.latitude,
      required this.longitude,
      required this.moment,
      required this.status,
      required this.total,
      required this.products});

  factory Order.fromMap(Map<String, dynamic> map) {
    return Order(
      id: map['id'] ?? 0,
      address: map['address'] ?? '',
      latitude: map['latitude'] ?? 0.0,
      longitude: map['longitude'] ?? 0.0,
      moment: map['moment'] ?? '',
      status: map['status'] ?? '',
      total: map['total']?.toDouble() ?? 0.0,
      products: map['products']
              ?.map<Product>((product) => Product.fromMap(product))
              .toList() ??
          [],
    );
  }

  factory Order.fromJson(String source) => Order.fromMap(jsonDecode(source));

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'address': address,
      'latitude': latitude,
      'longitude': longitude,
      'moment': moment,
      'status': status,
      'total': total,
      'products': products.map((e) => e.toMap()).toList()
    };
  }

  String toJson() => jsonEncode(toMap());
}
