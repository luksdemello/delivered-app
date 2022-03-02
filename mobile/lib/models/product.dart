import 'dart:convert';

class Product {
  final int id;
  final String name;
  final double price;
  final String description;
  final String imageUri;

  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.description,
    required this.imageUri,
  });

  factory Product.fromMap(Map<String, dynamic> map) {
    return Product(
      id: map['id'] ?? 0,
      name: map['name'] ?? '',
      price: map['price']?.toDouble() ?? 0.0,
      description: map['description'] ?? '',
      imageUri: map['imageUri'] ?? '',
    );
  }

  factory Product.fromJson(String source) =>
      Product.fromMap(jsonDecode(source));

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'price': price,
      'description': description,
      'imageUri': imageUri
    };
  }

  String toJson() => jsonEncode(toMap());
}
