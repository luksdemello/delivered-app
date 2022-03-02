import 'dart:convert';

import 'package:mobile/models/order.dart';
import 'package:mobile/repositories/deliver_repository_interface.dart';
import 'package:http/http.dart' as http;

class DeliverRepository implements IDeliverRepository {
  final _baseUrl = 'https://app-deliver-node.herokuapp.com';

  @override
  Future<List<Order>> findAll() async {
    try {
      final response = await http.get(Uri.parse('$_baseUrl/orders'));

      final List<dynamic> responseMap = jsonDecode(response.body);

      final orders = responseMap.map<Order>((e) => Order.fromMap(e)).toList();

      return orders;
    } catch (e) {
      print(e);
      throw Error();
    }
  }

  @override
  Future<void> updateOrder(int id) async {
    try {
      final response =
          await http.patch(Uri.parse('$_baseUrl/orders/$id/delivered'));
    } catch (e) {
      print(e);
      throw Error();
    }
  }
}
