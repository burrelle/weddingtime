defmodule Weddingtime.Repo.Migrations.CreateGuests do
  use Ecto.Migration

  def change do
    create table(:guests, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :forename, :string
      add :surname, :string
      add :attending, :boolean
      add :rsvp_id, references(:rsvps, type: :binary_id)

      timestamps()
    end

  end
end
