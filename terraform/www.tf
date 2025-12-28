resource "cloudflare_workers_script" "www" {
  count      = 1
  name       = local.www_host_key
  account_id = var.cloudflare_account_id
  module     = true

  content = <<-EOT
    export default {
      async fetch(req) {
        return new Response("This is a placeholder Worker.")
      }
    }
  EOT

  compatibility_date = "2025-07-04"
  compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]

  lifecycle {
    ignore_changes = [
		content,
		r2_bucket_binding,
	]
  }

  r2_bucket_binding {
    name = "ASSETS"
    bucket_name = cloudflare_r2_bucket.www_assets.name
  }

  plain_text_binding {
	name  = "NEXT_PUBLIC_ENV"
	text = local.env_vars.common.ENV
  }

  plain_text_binding {
	name  = "NEXT_PUBLIC_HOST"
	text = local.www_host
  }

#   plain_text_binding {
# 	name  = "AUTOTELEX_CLIENT_ID"
# 	text = var.autotelex_client_id
#   }

#   plain_text_binding {
# 	name  = "AUTOTELEX_CLIENT_SECRET"
# 	text = var.autotelex_client_secret
#   }

#   plain_text_binding {
# 	name  = "AUTOTELEX_API_KEY"
# 	text = var.autotelex_api_key
#   }

#   plain_text_binding {
# 	name  = "ZEPTO_API_KEY"
# 	text = var.zepto_api_key
#   }

  plain_text_binding {
	name  = "NEXT_PUBLIC_META_PIXEL_ID"
	text = var.meta_pixel_id
  }

#   plain_text_binding {
# 	name  = "NEXT_PUBLIC_META_ACCESS_TOKEN"
# 	text = var.meta_capi_access_token
#   }

#   plain_text_binding {
# 	name  = "NEXT_PUBLIC_API_HOST"
# 	text = local.api_host
#   }

#   plain_text_binding {
# 	name  = "NEXT_PUBLIC_META_PIXEL_ID"
# 	text = local.env_vars.common.META_PIXEL_ID
#   }
  
}


resource "cloudflare_r2_bucket" "www_assets" {
  account_id = var.cloudflare_account_id
  name       = "${local.www_host_key}-assets" # You can customize this name
}

resource "cloudflare_workers_domain" "root_domain_mapping" {
  zone_id	  = local.zone_id
  account_id  = var.cloudflare_account_id
  hostname    = local.host
  service     = cloudflare_workers_script.www[0].name
}

resource "cloudflare_workers_domain" "www_domain_mapping" {
  zone_id	  = local.zone_id
  account_id  = var.cloudflare_account_id
  hostname    = local.www_host
  service     = cloudflare_workers_script.www[0].name
}