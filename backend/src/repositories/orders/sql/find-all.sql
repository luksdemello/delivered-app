select 
  o.id,
  o.address,
  o.latitude,
  o.longitude,
  o.moment,
  o.status,
  json_agg(
    json_build_object(
      'id', p.id,
      'name', p.name,
      'price', p.price,
      'description', p.description,
      'image_uri', p.image_uri
     )
  ) as products
from 
  tb_orders o
inner join
  tb_orders_products po
on 
  o.id = po.order_id
inner join
  tb_products p
on 
  p.id = po.product_id
where 
  o.status = 'Pending'
group by
  o.id
order by
  o.moment
ASC