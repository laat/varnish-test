vcl 4.0;
import std;
backend default {
  .host = "template-server";
  .port = "80";
}
backend counter {
  .host = "content-server";
  .port = "80";
}
sub vcl_recv {
  if (req.url ~ "^/esi-counter") {
    set req.backend_hint = counter;
  }
  if (req.url ~ "^/_static/counter") {
    set req.backend_hint = counter;
  }
}
sub vcl_backend_response {
  set beresp.do_esi = true; // Do ESI processing
}