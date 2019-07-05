defmodule Weddingtime.Repo do
  use Ecto.Repo,
    otp_app: :weddingtime,
    adapter: Ecto.Adapters.Postgres
end
