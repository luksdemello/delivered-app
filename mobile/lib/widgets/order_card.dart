import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:jiffy/jiffy.dart';
import 'package:mobile/models/order.dart';

class OrderCard extends StatelessWidget {
  final Order order;

  OrderCard({
    Key? key,
    required this.order,
  }) : super(key: key);

  double value = 35.9;

  Text getValue() {
    final formatCurrency = NumberFormat.simpleCurrency(
      locale: 'pt-BR',
      decimalDigits: 2,
    );

    return Text(
      formatCurrency.format(order.total),
      style: const TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.bold,
        color: Color(0xFFDA5C5C),
      ),
    );
  }

  List<Text> renderProducts() {
    return order.products.map((e) => Text(e.name)).toList();
  }

  getDate(String date) {
    return Jiffy(date).fromNow();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 374,
      child: Card(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'PEDIDO ${order.id}',
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  getValue(),
                ],
              ),
              Text(getDate(order.moment)),
              const SizedBox(
                height: 12,
              ),
              const Divider(
                height: 1,
              ),
              const SizedBox(
                height: 12,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: renderProducts(),
              )
            ],
          ),
        ),
      ),
    );
  }
}
