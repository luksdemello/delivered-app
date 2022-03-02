import 'package:get/get.dart';
import 'package:jiffy/jiffy.dart';
import 'package:mobile/repositories/deliver_repository_interface.dart';

class OrdersController extends GetxController with StateMixin {
  final IDeliverRepository _repository;

  OrdersController({required IDeliverRepository repository})
      : _repository = repository;

  @override
  void onInit() {
    super.onInit();
    findOrders();
    changeLocale();
  }

  changeLocale() async {
    await Jiffy.locale('pt_br');
  }

  Future<void> findOrders() async {
    change([], status: RxStatus.loading());
    try {
      final resp = await _repository.findAll();
      change(resp, status: RxStatus.success());
    } catch (e) {
      change([], status: RxStatus.error('Erro ao buscar dados'));
    }
  }
}
