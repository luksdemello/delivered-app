import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class OrderCard extends StatelessWidget {
  OrderCard({Key? key}) : super(key: key);

  final List<String> pedidos = ['produto 1', 'produto 2', 'produto 3'];

  double value = 35.9;

  Text getValue() {
    final formatCurrency = NumberFormat.simpleCurrency(
      locale: 'pt-BR',
      decimalDigits: 2,
    );

    return Text(
      formatCurrency.format(value),
      style: const TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.bold,
        color: Color(0xFFDA5C5C),
      ),
    );
  }

  List<Text> renderProducts() {
    return pedidos.map((e) => Text(e)).toList();
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
                  const Text(
                    'PEDIDO 1',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  getValue(),
                ],
              ),
              const Text('Há 27 min'),
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
                children: renderProducts(),
              )
            ],
          ),
        ),
      ),
    );
  }
}
