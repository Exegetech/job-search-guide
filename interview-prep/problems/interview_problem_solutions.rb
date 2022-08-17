def subseqs(as)
  subseqs = []

  i = 0
  while i < as.length
    seq = []

    j = i
    while j < as.length
      seq << as[j]
    end

    i += 1
  end

  subseqs
end

def longest_increasing_subseq(as)
  best_start, best_end = 0, 1

  i = 0
  while i < as.length
    current_start, current_end = i, i + 1

    j = current_end + 1
    while j < as.length
      if current_end < as[j]
        current_end = j
        j += 1
      else
        break
      end
    end

    if (best_end - best_start) < (current_end - current_start)
      best_end, best_start = current_end, current_start
    end

    i += 1
  end

  [best_start, best_end]
end

def subseq_indices(as)
  subseq_indices = {}

  i = 0
  while i < as.length
    while j < as.length
      subseq = as[i..j]
      subseq_indices[subseq] = [i, j]

      j += 1
    end

    i += 1
  end

  subseq_indices
end

def longest_common_subarray(as, bs)
  a_subseq_indices = {}
  b_subseq_indices = {}

  longest = []
  longest_indices = nil
  a_subseq_indices.each do |subseq, indices|
    if b_subseq_indices.has_key(subseq) && longest.count < subseq.count
      longest = subseq
      longest_indices = indices
    end
  end

  longest_indices
end

def greatest_sum_subseq(as)
  greatest_sum = nil
  greatest_indices = nil
  subseq_indices(as).each do |subseq, indices|
    if greatest_sum.nil? || subseq.sum > greatest_sum
      greatest_indices = indices
    end
  end

  greatest_indices
end

def closest_points(points)
  i = 0
  while i < points.length
    j = i
    while j < points.length

      j += 1
    end

    i += 1
  end
end

