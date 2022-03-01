import 'package:flutter/material.dart';
import 'package:mobile/widgets/delivery_appbar.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: DeliveryAppBar(),
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              margin: const EdgeInsets.only(top: 40),
              child: Image.asset(
                'assets/images/deliveryman.png',
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top: 40),
              child: const Text(
                'Acompanhe os pedidos e entregue no prazo!',
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.w700,
                  letterSpacing: -0.01,
                  color: Color(0xFF263238),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Container(
              width: 270,
              margin: const EdgeInsets.only(top: 12, bottom: 30),
              child: const Text(
                'Receba todos os pedidos do seu restaurante na palma da sua mão',
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.normal,
                  letterSpacing: -0.01,
                  color: Color(0xFF9E9E9E),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            SizedBox(
              width: 235,
              height: 50,
              child: ElevatedButton(
                onPressed: () {
                  Get.offNamed('/orders');
                },
                child: const Text('VER PEDIDOS'),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  )),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
