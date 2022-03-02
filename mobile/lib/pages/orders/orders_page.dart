import 'package:flutter/material.dart';
import 'package:get/state_manager.dart';
import 'package:mobile/models/order.dart';
import 'package:mobile/pages/orders/orders_controller.dart';
import 'package:mobile/widgets/delivery_appbar.dart';
import 'package:mobile/widgets/order_card.dart';

class OrdersPage extends GetView<OrdersController> {
  const OrdersPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: DeliveryAppBar(),
      body: Container(
        padding: const EdgeInsets.all(8),
        child: controller.obx(
          (state) => ListView.builder(
            itemCount: state.length,
            itemBuilder: (_, index) {
              final Order order = state[index];
              return OrderCard(
                order: order,
              );
            },
          ),
        ),
      ),
    );
  }
}
