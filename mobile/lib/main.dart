import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/pages/home/home_page.dart';
import 'package:mobile/pages/orders/orders_binding.dart';
import 'package:mobile/pages/orders/orders_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Delivery app',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: const Color(0xFFDA5C5C),
        fontFamily: 'OpenSans',
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            primary: const Color(0xFFDA5C5C),
            textStyle: const TextStyle(
              fontFamily: 'OpenSans',
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
      initialRoute: '/',
      getPages: [
        GetPage(
          name: '/',
          page: () => const HomePage(),
        ),
        GetPage(
          name: '/orders',
          page: () => const OrdersPage(),
          binding: OrdersBinding(),
        )
      ],
    );
  }
}
