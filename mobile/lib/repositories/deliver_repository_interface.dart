import 'package:mobile/models/order.dart';

abstract class IDeliverRepository {
  Future<List<Order>> findAll();
  Future<void> updateOrder(int id);
}
