# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Weddingtime.Repo.insert!(%Weddingtime.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Weddingtime.Attendance.Guest
alias Weddingtime.Attendance.Rsvp
alias Weddingtime.Repo


{:ok, %{id: id}} = %Rsvp{party: "Burrell"} |> Repo.insert()
%Guest{forename: "Andrea", surname: "Burrell", rsvp_id: id} |> Repo.insert!()
%Guest{forename: "Dave", surname: "Burrell", rsvp_id: id} |> Repo.insert!()
