module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .filter((e) => typeof e === "string")
        .map((e) => e.trim()[0].toUpperCase())
        .sort()
        .join("")
    : false;
};
