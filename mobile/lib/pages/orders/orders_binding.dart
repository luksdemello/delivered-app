import 'package:get/get.dart';
import 'package:mobile/pages/orders/orders_controller.dart';
import 'package:mobile/repositories/deliver_repository.dart';
import 'package:mobile/repositories/deliver_repository_interface.dart';

class OrdersBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<IDeliverRepository>(() => DeliverRepository());
    Get.lazyPut(() => OrdersController(repository: Get.find()));
  }
}
