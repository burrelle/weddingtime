defmodule WeddingtimeWeb.GuestResolver do
  alias Weddingtime.Attendance

  def guests(_, args, _) do
    {:ok, Attendance.list_guests(args)}
  end

  def all_rsvps(_, _, _) do
    {:ok, Attendance.list_rsvps()}
  end
end
