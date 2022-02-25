update tb_orders
set status = 'Delivered'
where 
  id = @P1@;
