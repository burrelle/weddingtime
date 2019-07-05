defmodule Weddingtime.Repo.Migrations.CreateRsvps do
  use Ecto.Migration

  def change do
    create table(:rsvps, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :party, :string

      timestamps()
    end

  end
end
