import 'package:flutter/material.dart';
import 'package:get/get.dart';

class DeliveryAppBar extends AppBar {
  DeliveryAppBar({
    Key? key,
    double elevation = 2,
  }) : super(
          automaticallyImplyLeading: false,
          key: key,
          centerTitle: true,
          backgroundColor: const Color(0xFFDA5C5C),
          title: GestureDetector(
            onTap: () {
              Get.offNamed('/home');
            },
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(
                  'assets/images/logo.png',
                  width: 30,
                ),
                Container(
                  margin: const EdgeInsets.only(left: 12),
                  child: const Text(
                    'Delivery App',
                    style: TextStyle(
                      fontSize: 18,
                      letterSpacing: -0.24,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                )
              ],
            ),
          ),
        );
}
