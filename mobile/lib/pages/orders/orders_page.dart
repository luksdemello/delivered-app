import 'package:flutter/material.dart';
import 'package:mobile/widgets/delivery_appbar.dart';
import 'package:mobile/widgets/order_card.dart';

class OrdersPage extends StatelessWidget {
  const OrdersPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: DeliveryAppBar(),
        body: Container(
          padding: const EdgeInsets.all(8),
          child: ListView.builder(
            itemCount: 1,
            itemBuilder: (context, index) {
              return OrderCard();
            },
          ),
        ));
  }
}
