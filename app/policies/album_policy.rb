class AlbumPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end

  end

  def create?
    user.admin === true
    # true
  end

  def show?
    true
  end
end
