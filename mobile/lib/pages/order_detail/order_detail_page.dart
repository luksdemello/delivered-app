import 'package:flutter/material.dart';
import 'package:map_launcher/map_launcher.dart';
import 'package:mobile/models/order.dart';
import 'package:mobile/repositories/deliver_repository.dart';
import 'package:mobile/widgets/delivery_appbar.dart';
import 'package:mobile/widgets/order_card.dart';
import 'package:get/get.dart';

class OrderDetailPage extends StatelessWidget {
  Order order;

  OrderDetailPage({Key? key, required this.order}) : super(key: key);

  final _repository = DeliverRepository();

  getMap() {
    final map =
        'https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: DeliveryAppBar(),
      body: Container(
        width: Get.width,
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            OrderCard(order: order),
            const SizedBox(height: 30),
            SizedBox(
              width: 374,
              height: 50,
              child: ElevatedButton(
                onPressed: () async {
                  final availableMaps = await MapLauncher.installedMaps;

                  await availableMaps.first.showMarker(
                    coords: Coords(order.latitude, order.longitude),
                    title: order.address,
                  );
                },
                child: const Text('INICIAR NAVEGAÇÃO'),
              ),
            ),
            const SizedBox(height: 34),
            SizedBox(
              width: 374,
              height: 50,
              child: ElevatedButton(
                onPressed: () async {
                  await _repository.updateOrder(order.id);
                  Get.offNamed('/orders');
                },
                child: const Text('CONFIRMAR ENTREGA'),
              ),
            ),
            const SizedBox(height: 34),
            SizedBox(
              width: 374,
              height: 50,
              child: ElevatedButton(
                onPressed: () {
                  Get.offNamed('/orders');
                },
                child: const Text('CANCELAR'),
              ),
            )
          ],
        ),
      ),
    );
  }
}
