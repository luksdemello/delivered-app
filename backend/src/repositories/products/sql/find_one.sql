select 
  id,
  name,
  price,
  description,
  image_uri
from 
  tb_products 
where
  id = @P1@;