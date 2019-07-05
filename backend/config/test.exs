use Mix.Config

# Configure your database
config :weddingtime, Weddingtime.Repo,
  username: "postgres",
  password: "postgres",
  database: "weddingtime_test",
  hostname: "localhost",
  port: 54322,
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :weddingtime, WeddingtimeWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
